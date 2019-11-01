import { Address, BigInt, log, ipfs, json, Bytes } from "@graphprotocol/graph-ts"
import {
  Contract,
  Transfer,
  CancelProject,
  GiverAdded,
  GiverUpdated,
  DelegateAdded,
  DelegateUpdated,
  ProjectAdded,
  ProjectUpdated,
  AddProjectCall,
  AddGiverCall,
  DonateCall,
  AddGiverAndDonateCall,
} from "../generated/Contract/Contract"
import { Profile, PledgesInfo, Pledge, ProjectInfo } from "../generated/schema"

export function handleAddGiver(call: AddGiverCall): void {
    log.info(
        'handleAddGiver triggered. idGiver: {}',
        [call.outputs.idGiver.toString()]
    )
    let id = call.outputs.idGiver
    let timestamp = call.block.timestamp
    let profile = new Profile(id.toHex())
    profile.url = call.inputs.url
    profile.name = call.inputs.name
    profile.addr = call.inputs.addr
    profile.commitTime = call.inputs.commitTime
    profile.canceled = false
    profile.type = 'GIVER'
    profile.profileId = id
    profile.creationTime = timestamp
    profile.save()
}

export function handleAddProject(call: AddProjectCall): void {
    let id = call.outputs.idProject
    let timestamp = call.block.timestamp
    let profile = new Profile(id.toHex())
    let content = call.inputs.url
    profile.url = content
    profile.name = call.inputs.name
    profile.addr = call.inputs.projectAdmin
    profile.commitTime = call.inputs.commitTime
    profile.canceled = false
    profile.type = 'PROJECT'
    profile.profileId = id
    profile.creationTime = timestamp
    profile.save()
    createProjectInfo(content, profile)
}

function createProjectInfo(content: String, profile: Profile, isFile: boolean = false): void {
    let hash = content.split('/').slice(-1)[0]
    let contentHash = isFile ? hash : hash + '/manifest.json'
    let manifest = ipfs.cat(contentHash)

    if (manifest == null) {
        log.info('manifest is null', [])
        if (!isFile) createProjectInfo(content, profile, true)
    } else {
        let parsed = json.fromBytes(manifest as Bytes).toObject()
        log.info(
            'ipfs title: {}',
            [
                parsed.get('title').toString()
            ]
        )
        let projectInfo = new ProjectInfo(contentHash)
        projectInfo.profile = profile.id
        projectInfo.title = parsed.get('title').toString()
        projectInfo.subtitle = parsed.get('subtitle').toString()
        projectInfo.creator = parsed.get('creator').toString()
        projectInfo.repo = parsed.get('repo').toString()
        projectInfo.avatar = parsed.get('avatar').toString()
        projectInfo.goal = parsed.get('goal').toString()
        projectInfo.goalToken = parsed.get('goalToken').toString()
        projectInfo.description = parsed.get('description').toString()
        projectInfo.chatRoom = parsed.get('chatRoom').toString()
        let media = parsed.get('media').toObject()
        projectInfo.isPlaying = media.get('isPlaying').toBool()
        projectInfo.type = media.get('type').toString()
        projectInfo.file = media.get('file').toString()
        projectInfo.save()

        profile.projectInfo = projectInfo.id
        profile.save()
    }
}

export function handleDonate(call: DonateCall): void {
    // let giver = call.inputs.idGiver
    // let receiver = call.inputs.idReceiver
    // let token = call.inputs.token
    // let amount = call.inputs.amount

    // let giverId = giver.toString() + token.toString()
    // let receiverId = receiver.toString() + token.toString()

    // let giverPledges = PledgesInfo.load(giverId)
    // let receiverPledges = PledgesInfo.load(receiverId)

    // if (receiverPledges == null) {
    //     receiverPledges = new PledgesInfo(receiverId)
    //     receiverPledges.token = token.toString()
    //     receiverPledges.profile = receiver.toHex()
    // }
    // if (giver.notEqual(new BigInt(0))) {
    //     giverPledges.balance.minus(amount)
    //     giverPledges.save()
    // }
    // receiverPledges.lifetimeReceived.plus(amount)
    // receiverPledges.balance.plus(amount)
    // receiverPledges.save()

    log.info(
        'id receiver: {}, amount: {}, token: {}',
        [
            call.inputs.idReceiver.toString(),
            call.inputs.amount.toString(),
            call.inputs.token.toString()
        ]
    )
}

export function handleAddGiverAndDonate(call: AddGiverAndDonateCall): void {
    // let receiver = call.inputs.idReceiver
    // let token = call.inputs.token
    // let amount = call.inputs.amount
    // let receiverId = receiver.toString() + token.toString()

    // let receiverPledges = PledgesInfo.load(receiverId)

    // if (receiverPledges == null) {
    //     receiverPledges = new PledgesInfo(receiverId)
    //     receiverPledges.token = token.toString()
    //     receiverPledges.profile = receiver.toHex()
    // }
    // receiverPledges.lifetimeReceived.plus(amount)
    // receiverPledges.balance.plus(amount)
    // receiverPledges.save()
    log.info(
        'id receiver: {}, amount: {}, token: {}',
        [
            call.inputs.idReceiver.toString(),
            call.inputs.amount.toString(),
            call.inputs.token.toString()
        ]
    )
}
const getPledgeInfoId = (pledge: Pledge): string => pledge.owner + pledge.token
function createOrUpdatePledgeInfo(event: Transfer): void {
    let pledgeTo = Pledge.load(event.params.to.toHex())
    let amount = event.params.amount
    let pledgeInfoToId = getPledgeInfoId(pledgeTo as Pledge)
    let pledgeInfoTo = PledgesInfo.load(pledgeInfoToId)
    let pledgeFrom = Pledge.load(event.params.from.toHex())
    if (pledgeInfoTo == null) {
        pledgeInfoTo = new PledgesInfo(pledgeInfoToId)
        pledgeInfoTo.token = pledgeTo.token
        pledgeInfoTo.profile = pledgeTo.owner
        pledgeInfoTo.profileRef = pledgeTo.owner
        pledgeInfoTo.lifetimeReceived = new BigInt(0)
        pledgeInfoTo.balance = new BigInt(0)
    }
    pledgeInfoTo.balance = amount.plus(pledgeInfoTo.balance)

    if (pledgeFrom != null) {
        let pledgeInfoFromId = getPledgeInfoId(pledgeFrom as Pledge)
        let pledgeInfoFrom = PledgesInfo.load(pledgeInfoFromId)
        pledgeInfoFrom.balance = pledgeInfoFrom.balance.minus(amount)
        pledgeInfoFrom.save()
        if (pledgeInfoFromId != pledgeInfoToId) {
            pledgeInfoTo.lifetimeReceived = amount.plus(pledgeInfoTo.lifetimeReceived)
        }
    } else {
        pledgeInfoTo.lifetimeReceived = amount.plus(pledgeInfoTo.lifetimeReceived)
    }
    pledgeInfoTo.save()
}

function createOrUpdatePledge(event: Transfer): void {
    let contract = Contract.bind(event.address)
    let pledge =  contract.getPledge(event.params.to)
    let timestamp = event.block.timestamp
    let token = pledge.value6
    let owner = pledge.value1.toHex()
    let amount = pledge.value0
    let commitTime = pledge.value4
    let intendedProject = pledge.value3
    let pledgeState = pledge.value7
    let ndelegates = pledge.value2
    let transferAmount = event.params.amount
    log.info(
        'pledge id: {}, amount: {}, owner: {}, nDelegates: {}, intendedProject: {}, commitTime: {}, oldPledge: {}, pledge token: {}, pledge state: {}, transfer amount: {}',
        [
            event.params.to.toString(),
            pledge.value0.toString(), // amount
            pledge.value1.toString(), // owner
            pledge.value2.toString(), // nDelegates
            pledge.value3.toString(), // intendedProject
            pledge.value4.toString(), // commitTime
            pledge.value5.toString(), // old pledge
            pledge.value6.toHexString(), // Token
            pledge.value7.toString(), // pledgeState
            event.params.amount.toString()
        ]
    )
    let toPledge = Pledge.load(event.params.to.toHex())
    let fromPledge = Pledge.load(event.params.from.toHex())
    if (toPledge == null) {
        toPledge = new Pledge(event.params.to.toHex())
        toPledge.amount = new BigInt(0)
    }
    if (fromPledge != null) {
        log.info(
            'pledge from: {}, existing amount: {}, transfer amount: {}',
            [fromPledge.id.toString(), fromPledge.amount.toString(), amount.toString()]
        )
        fromPledge.amount = fromPledge.amount.minus(transferAmount)
        fromPledge.save()
    }
    toPledge.owner = owner
    toPledge.token = token.toHexString()
    toPledge.amount = toPledge.amount.plus(transferAmount)
    toPledge.commitTime = commitTime
    toPledge.intendedProject = intendedProject
    toPledge.pledgeState = pledgeState
    toPledge.nDelegates = ndelegates
    toPledge.creationTime = timestamp
    toPledge.oldPledge = event.params.from.toHex()
    toPledge.save()
}

export function handleTransfer(event: Transfer): void {
    createOrUpdatePledge(event)
    createOrUpdatePledgeInfo(event)

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.APP_ADDR_NAMESPACE(...)
  // - contract.whitelistDisabled(...)
  // - contract.isProjectCanceled(...)
  // - contract.PLUGIN_MANAGER_ROLE(...)
  // - contract.numberOfPledges(...)
  // - contract.getPledgeDelegate(...)
  // - contract.getRecoveryVault(...)
  // - contract.getPledge(...)
  // - contract.isValidPlugin(...)
  // - contract.normalizePledge(...)
  // - contract.addDelegate(...)
  // - contract.numberOfPledgeAdmins(...)
  // - contract.EVMSCRIPT_REGISTRY_APP_ID(...)
  // - contract.addGiver(...)
  // - contract.addProject(...)
  // - contract.allowRecoverability(...)
  // - contract.addGiver(...)
  // - contract.appId(...)
  // - contract.getCodeHash(...)
  // - contract.ETH(...)
  // - contract.getInitializationBlock(...)
  // - contract.EVMSCRIPT_REGISTRY_APP(...)
  // - contract.canPerform(...)
  // - contract.kernel(...)
  // - contract.getPledgeAdmin(...)
  // - contract.getExecutor(...)
  // - contract.vault(...)
}

export function handleGiverAdded(event: GiverAdded): void {}

export function handleCancelProject(event: CancelProject): void {}

export function handleGiverUpdated(event: GiverUpdated): void {}

export function handleDelegateAdded(event: DelegateAdded): void {}

export function handleDelegateUpdated(event: DelegateUpdated): void {}

export function handleProjectUpdated(event: ProjectUpdated): void {}

export function handleProjectAdded(event: ProjectUpdated): void {}

import { Address, BigInt, log } from "@graphprotocol/graph-ts"
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
  DonateCall,
  AddGiverAndDonateCall,
} from "../generated/Contract/Contract"
import { ExampleEntity, Profile, PledgesInfo, Pledge } from "../generated/schema"


export function handleAddProject(call: AddProjectCall): void {
    let id = call.outputs.idProject
    let profile = new Profile(id.toHex())
    profile.url = call.inputs.url
    profile.name = call.inputs.name
    profile.addr = call.inputs.projectAdmin
    profile.commitTime = call.inputs.commitTime
    profile.canceled = false
    profile.type = 'PROJECT'
    profile.profileId = id
    profile.save()
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

export function handleTransfer(event: Transfer): void {
  // Entities can be loaded from the store using a string ID; this ID
    // needs to be unique across all entities of the same type
    let contract = Contract.bind(event.address)
    let pledge =  contract.getPledge(event.params.to)
    let token = pledge.value6
    let owner = pledge.value1
    let amount = pledge.value0
    let commitTime = pledge.value4
    let intendedProject = pledge.value3
    let pledgeState = pledge.value7
    let ndelegates = pledge.value2
    log.info(
        'amount: {}, owner: {}, nDelegates: {}, intendedProject: {}, commitTime: {}, oldPledge: {}, pledge token: {}, pledge state: {}',
        [
            pledge.value0.toString(), // amount
            pledge.value1.toString(), // owner
            pledge.value2.toString(), // nDelegates
            pledge.value3.toString(), // intendedProject
            pledge.value4.toString(), // commitTime
            pledge.value5.toString(), // old pledge
            pledge.value6.toHexString(), // Token
            pledge.value7.toString() // pledgeState
        ]
    )
    let pledgeEntity = Pledge.load(event.params.to.toHex())
    if (pledgeEntity == null) pledgeEntity = new Pledge(event.params.to.toHex())
    pledgeEntity.owner = owner.toString()
    pledgeEntity.token = token.toHexString()
    pledgeEntity.amount = amount
    pledgeEntity.commitTime = commitTime
    pledgeEntity.intendedProject = intendedProject
    pledgeEntity.pledgeState = pledgeState
    pledgeEntity.nDelegates = ndelegates
    pledgeEntity.save()

  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.from = event.params.from
  entity.to = event.params.to

  // Entities can be written to the store with `.save()`
  entity.save()

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

export function handleCancelProject(event: CancelProject): void {}

export function handleGiverAdded(event: GiverAdded): void {}

export function handleGiverUpdated(event: GiverUpdated): void {}

export function handleDelegateAdded(event: DelegateAdded): void {}

export function handleDelegateUpdated(event: DelegateUpdated): void {}

export function handleProjectUpdated(event: ProjectUpdated): void {}

export function handleProjectAdded(event: ProjectUpdated): void {}

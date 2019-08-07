import { BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/Contract/Contract"
import { ExampleEntity, Profile } from "../generated/schema"


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

export function handleProjectAdded(event: ProjectAdded): void {
  //  let profileId = event.params.idProject.toHex()
  //  let profile = new Profile(profileId)
  //  profile.url = event.params.url
  //  profile.save()
}

export function handleTransfer(event: Transfer): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
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

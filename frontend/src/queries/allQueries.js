const FIND_PRODUCTION_BY_SHIFT = `
query FindProductionByShift($shift: String!) {
  findProductionByShift(Shift: $shift) {
    Date
    Id
    ProductionCount
    Shift
    Zone
  }
}
`;

const POST_MUTATION = `
mutation Mutation($zone: Int, $shift: String, $productionCount: Int) {
  createProductionCount(Zone: $zone, Shift: $shift, ProductionCount: $productionCount) {
    ProductionCount
    Shift
    Zone
  }
}
`;

const UPDATE_MUTATION = `
mutation Mutation($id: Int, $productionCount: Int) {
  updateProductionCount(Id: $id, ProductionCount: $productionCount) {
    Date
    Id
    ProductionCount
    Shift
    Zone
  }
}
`;

  const MACHINE_DATA = `
  query GetAllMachineData {
    getAllMachineData {
      machine_id
      machine_name
      value
      action_taken_value
      battery_pack_id
      physicalPhenomena {
        phenomena_no
        phenomena_name
        action_taken
      }
    }
  }
  `
  const ADD_ACTION_TABLE = `
  mutation Mutation($pActionTakenId: Int, $actionTaken: String) {
    addActionTaken(p_action_taken_id: $pActionTakenId, action_taken: $actionTaken) {
      action_taken_id
      p_action_taken_id
      action_taken
    }
  }
  `
  const VALIDATE_USER = `
  query ValidateUser($userName: String!) {
    validateUser(userName: $userName) {
      user_id
      user_name
      user_password
      user_roles_role
      user_machine_id
    }
  }
  `
  const P_PHENOMENA_LENGTH = `
  query Query {
    getPhysicalPhenomenaLength {
      length
    }
  }
  `
const ADD_PHYSICAL_PHENOMEA_TABLE = `
mutation Mutation($pMachineId: Int, $phenomenaNo: Int, $phenomenaName: String) {
  addPhysicalPhenomena(p_machine_id: $pMachineId, phenomena_no: $phenomenaNo, phenomena_name: $phenomenaName) {
    p_machine_id
    phenomena_no
    phenomena_name
  }
}
`

const ADD_MACHINE_RECORDS = `
mutation Mutation($machine: String, $pPhenomena: String, $phenomenaNo: Int, $actionTaken: String,$batteryPackeId: String) {
  addPhysicalPhenomenaRecords(machine: $machine, p_phenomena: $pPhenomena, phenomena_no: $phenomenaNo, action_taken: $actionTaken, battery_pack_id: $batteryPackeId) {
    ppr_Id
    date
    machine
    p_phenomena
    phenomena_no
    action_taken
    battery_pack_id
  }
}
`
const TODAYS_PP_RECORDS = `
query Query {
  getTodaysPhysicalPhenomena {
    ppr_Id
    date
    machine
    p_phenomena
    phenomena_no
    action_taken
  }
}
`
const PPR_BY_DATE = `
query GetPhysicalPhenomenaBasedOnDate($date: DateTime) {
  getPhysicalPhenomenaBasedOnDate(date: $date) {
    ppr_Id
    date
    machine
    p_phenomena
    phenomena_no
    action_taken
  }
}
`
const R_MACHINE_DATA = `
query Query {
  getAllRejectionWorkMachineData {
    machine_id
    machine_name
    value
    action_taken_value
    battery_pack_id
    physicalPhenomena {
      phenomena_no
      phenomena_name
      action_taken
    }
  }
}
`

const ADD_R_P_PHENOMENA_RECORDS = `
mutation Mutation($rMachine: String, $rPPhenomena: String, $rPhenomenaNo: Int, $rActionTaken: String, $rBatteryPackId: String) {
  addRejectionppRecords(r_machine: $rMachine, r_p_phenomena: $rPPhenomena, r_phenomena_no: $rPhenomenaNo, r_action_taken: $rActionTaken, r_battery_pack_id: $rBatteryPackId) {
    r_ppr_Id
    r_date
    r_machine
    r_p_phenomena
    r_phenomena_no
    r_action_taken
    r_battery_pack_id
  }
}
`

const RP_PHENOMENA_LENGTH = `
query Query {
  getRPhysicalPhenomenaLength {
    length
  }
}
`

const ADD_R_PHYSICAL_PHENOMENA = `
mutation Mutation($rpMachineId: Int, $rPhenomenaNo: Int, $rPhenomenaName: String) {
  addRPhysicalPhenomena(rp_machine_id: $rpMachineId, r_phenomena_no: $rPhenomenaNo, r_phenomena_name: $rPhenomenaName) {
    rp_machine_id
    r_phenomena_no
    r_phenomena_name
  }
}
`

const ADD_R_ACTION_TAKEN = `
mutation AddRActionTaken($rpActionTakenId: Int, $rActionTaken: String) {
  addRActionTaken(rp_action_taken_id: $rpActionTakenId, r_action_taken: $rActionTaken) {
    r_action_taken_id
    rp_action_taken_id
    r_action_taken
  }
}
`

export {FIND_PRODUCTION_BY_SHIFT,POST_MUTATION,UPDATE_MUTATION,MACHINE_DATA,ADD_ACTION_TABLE,VALIDATE_USER,P_PHENOMENA_LENGTH,ADD_PHYSICAL_PHENOMEA_TABLE,ADD_MACHINE_RECORDS,TODAYS_PP_RECORDS,PPR_BY_DATE,R_MACHINE_DATA,ADD_R_P_PHENOMENA_RECORDS,RP_PHENOMENA_LENGTH,ADD_R_PHYSICAL_PHENOMENA,ADD_R_ACTION_TAKEN }
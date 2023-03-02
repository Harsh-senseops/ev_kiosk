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

export {FIND_PRODUCTION_BY_SHIFT,POST_MUTATION,UPDATE_MUTATION}
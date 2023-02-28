var DataTypes = require("sequelize").DataTypes;
var _BMSActivation = require("./BMSActivation");
var _BatteryPackINOUTReport = require("./BatteryPackINOUTReport");
var _CellTesting = require("./CellTesting");
var _FoamStationData = require("./FoamStationData");
var _InserationStationData = require("./InserationStationData");
var _LeakTesting = require("./LeakTesting");
var _LeaserMarking = require("./LeaserMarking");
var _OP130_160_Z_Fixation_Report = require("./OP130_160_Z_Fixation_Report");
var _OP180_RWeldingParameter_Report = require("./OP180_RWeldingParameter_Report");
var _OP180_RWeldingParameter_Report1 = require("./OP180_RWeldingParameter_Report1");
var _OP190_Weld_Intigrity_Report = require("./OP190_Weld_Intigrity_Report");
var _OP200_IFS01_Process_Report = require("./OP200_IFS01_Process_Report");
var _OP20CellDatabase = require("./OP20CellDatabase");
var _OP210_TPS01_Process_Report = require("./OP210_TPS01_Process_Report");
var _OP220_LeakTest_Process_Report = require("./OP220_LeakTest_Process_Report");
var _OP30_90_Battery_Pack = require("./OP30_90_Battery_Pack");
var _PlannedProductionCount = require("./PlannedProductionCount");
var _ThermalStationData = require("./ThermalStationData");
var _WeldIntegrity = require("./WeldIntegrity");
var _WeldingStation = require("./WeldingStation");
var _Z_FixationData = require("./Z_FixationData");
var _Zone01_CellTesting = require("./Zone01_CellTesting");
var _Zone01_ProductionData = require("./Zone01_ProductionData");
var _Zone01_RealTimeData = require("./Zone01_RealTimeData");
var _Zone02_DrumDetails = require("./Zone02_DrumDetails");
var _Zone02_ProductionData = require("./Zone02_ProductionData");
var _Zone02_RealTimeData = require("./Zone02_RealTimeData");
var _Zone02_StackFormation = require("./Zone02_StackFormation");
var _Zone02_Station1Calibration = require("./Zone02_Station1Calibration");
var _Zone02_Station1DispensingData = require("./Zone02_Station1DispensingData");
var _Zone02_Station2Calibration = require("./Zone02_Station2Calibration");
var _Zone02_Station2DispensingData = require("./Zone02_Station2DispensingData");
var _Zone02_Station3Calibration = require("./Zone02_Station3Calibration");
var _Zone03_1_DrumDetails = require("./Zone03_1_DrumDetails");
var _Zone03_1_FoamCalibration = require("./Zone03_1_FoamCalibration");
var _Zone03_1_FoamDispensingData = require("./Zone03_1_FoamDispensingData");
var _Zone03_1_InseratDispensingData = require("./Zone03_1_InseratDispensingData");
var _Zone03_1_InserationCalibration = require("./Zone03_1_InserationCalibration");
var _Zone03_1_ProductionData = require("./Zone03_1_ProductionData");
var _Zone03_1_RealTimeData = require("./Zone03_1_RealTimeData");
var _Zone03_1_ThermalCalibration = require("./Zone03_1_ThermalCalibration");
var _Zone03_1_ThermalDispensingData = require("./Zone03_1_ThermalDispensingData");
var _Zone03_2_DrumDetails = require("./Zone03_2_DrumDetails");
var _Zone03_2_FoamCalibration = require("./Zone03_2_FoamCalibration");
var _Zone03_2_FoamDispensingData = require("./Zone03_2_FoamDispensingData");
var _Zone03_2_InseratDispensingData = require("./Zone03_2_InseratDispensingData");
var _Zone03_2_InserationCalibration = require("./Zone03_2_InserationCalibration");
var _Zone03_2_ProductionData = require("./Zone03_2_ProductionData");
var _Zone03_2_RealTimeData = require("./Zone03_2_RealTimeData");
var _Zone03_2_ThermalCalibration = require("./Zone03_2_ThermalCalibration");
var _Zone03_2_ThermalDispensingData = require("./Zone03_2_ThermalDispensingData");
var _Zone03_Station2DispensingData = require("./Zone03_Station2DispensingData");
var _ZoneNames = require("./ZoneNames");

function initModels(sequelize) {
  var BMSActivation = _BMSActivation(sequelize, DataTypes);
  var BatteryPackINOUTReport = _BatteryPackINOUTReport(sequelize, DataTypes);
  var CellTesting = _CellTesting(sequelize, DataTypes);
  var FoamStationData = _FoamStationData(sequelize, DataTypes);
  var InserationStationData = _InserationStationData(sequelize, DataTypes);
  var LeakTesting = _LeakTesting(sequelize, DataTypes);
  var LeaserMarking = _LeaserMarking(sequelize, DataTypes);
  var OP130_160_Z_Fixation_Report = _OP130_160_Z_Fixation_Report(sequelize, DataTypes);
  var OP180_RWeldingParameter_Report = _OP180_RWeldingParameter_Report(sequelize, DataTypes);
  var OP180_RWeldingParameter_Report1 = _OP180_RWeldingParameter_Report1(sequelize, DataTypes);
  var OP190_Weld_Intigrity_Report = _OP190_Weld_Intigrity_Report(sequelize, DataTypes);
  var OP200_IFS01_Process_Report = _OP200_IFS01_Process_Report(sequelize, DataTypes);
  var OP20CellDatabase = _OP20CellDatabase(sequelize, DataTypes);
  var OP210_TPS01_Process_Report = _OP210_TPS01_Process_Report(sequelize, DataTypes);
  var OP220_LeakTest_Process_Report = _OP220_LeakTest_Process_Report(sequelize, DataTypes);
  var OP30_90_Battery_Pack = _OP30_90_Battery_Pack(sequelize, DataTypes);
  var PlannedProductionCount = _PlannedProductionCount(sequelize, DataTypes);
  var ThermalStationData = _ThermalStationData(sequelize, DataTypes);
  var WeldIntegrity = _WeldIntegrity(sequelize, DataTypes);
  var WeldingStation = _WeldingStation(sequelize, DataTypes);
  var Z_FixationData = _Z_FixationData(sequelize, DataTypes);
  var Zone01_CellTesting = _Zone01_CellTesting(sequelize, DataTypes);
  var Zone01_ProductionData = _Zone01_ProductionData(sequelize, DataTypes);
  var Zone01_RealTimeData = _Zone01_RealTimeData(sequelize, DataTypes);
  var Zone02_DrumDetails = _Zone02_DrumDetails(sequelize, DataTypes);
  var Zone02_ProductionData = _Zone02_ProductionData(sequelize, DataTypes);
  var Zone02_RealTimeData = _Zone02_RealTimeData(sequelize, DataTypes);
  var Zone02_StackFormation = _Zone02_StackFormation(sequelize, DataTypes);
  var Zone02_Station1Calibration = _Zone02_Station1Calibration(sequelize, DataTypes);
  var Zone02_Station1DispensingData = _Zone02_Station1DispensingData(sequelize, DataTypes);
  var Zone02_Station2Calibration = _Zone02_Station2Calibration(sequelize, DataTypes);
  var Zone02_Station2DispensingData = _Zone02_Station2DispensingData(sequelize, DataTypes);
  var Zone02_Station3Calibration = _Zone02_Station3Calibration(sequelize, DataTypes);
  var Zone03_1_DrumDetails = _Zone03_1_DrumDetails(sequelize, DataTypes);
  var Zone03_1_FoamCalibration = _Zone03_1_FoamCalibration(sequelize, DataTypes);
  var Zone03_1_FoamDispensingData = _Zone03_1_FoamDispensingData(sequelize, DataTypes);
  var Zone03_1_InseratDispensingData = _Zone03_1_InseratDispensingData(sequelize, DataTypes);
  var Zone03_1_InserationCalibration = _Zone03_1_InserationCalibration(sequelize, DataTypes);
  var Zone03_1_ProductionData = _Zone03_1_ProductionData(sequelize, DataTypes);
  var Zone03_1_RealTimeData = _Zone03_1_RealTimeData(sequelize, DataTypes);
  var Zone03_1_ThermalCalibration = _Zone03_1_ThermalCalibration(sequelize, DataTypes);
  var Zone03_1_ThermalDispensingData = _Zone03_1_ThermalDispensingData(sequelize, DataTypes);
  var Zone03_2_DrumDetails = _Zone03_2_DrumDetails(sequelize, DataTypes);
  var Zone03_2_FoamCalibration = _Zone03_2_FoamCalibration(sequelize, DataTypes);
  var Zone03_2_FoamDispensingData = _Zone03_2_FoamDispensingData(sequelize, DataTypes);
  var Zone03_2_InseratDispensingData = _Zone03_2_InseratDispensingData(sequelize, DataTypes);
  var Zone03_2_InserationCalibration = _Zone03_2_InserationCalibration(sequelize, DataTypes);
  var Zone03_2_ProductionData = _Zone03_2_ProductionData(sequelize, DataTypes);
  var Zone03_2_RealTimeData = _Zone03_2_RealTimeData(sequelize, DataTypes);
  var Zone03_2_ThermalCalibration = _Zone03_2_ThermalCalibration(sequelize, DataTypes);
  var Zone03_2_ThermalDispensingData = _Zone03_2_ThermalDispensingData(sequelize, DataTypes);
  var Zone03_Station2DispensingData = _Zone03_Station2DispensingData(sequelize, DataTypes);
  var ZoneNames = _ZoneNames(sequelize, DataTypes);

  PlannedProductionCount.belongsTo(ZoneNames, { as: "Zone_ZoneName", foreignKey: "Zone"});
  ZoneNames.hasMany(PlannedProductionCount, { as: "PlannedProductionCounts", foreignKey: "Zone"});

  return {
    BMSActivation,
    BatteryPackINOUTReport,
    CellTesting,
    FoamStationData,
    InserationStationData,
    LeakTesting,
    LeaserMarking,
    OP130_160_Z_Fixation_Report,
    OP180_RWeldingParameter_Report,
    OP180_RWeldingParameter_Report1,
    OP190_Weld_Intigrity_Report,
    OP200_IFS01_Process_Report,
    OP20CellDatabase,
    OP210_TPS01_Process_Report,
    OP220_LeakTest_Process_Report,
    OP30_90_Battery_Pack,
    PlannedProductionCount,
    ThermalStationData,
    WeldIntegrity,
    WeldingStation,
    Z_FixationData,
    Zone01_CellTesting,
    Zone01_ProductionData,
    Zone01_RealTimeData,
    Zone02_DrumDetails,
    Zone02_ProductionData,
    Zone02_RealTimeData,
    Zone02_StackFormation,
    Zone02_Station1Calibration,
    Zone02_Station1DispensingData,
    Zone02_Station2Calibration,
    Zone02_Station2DispensingData,
    Zone02_Station3Calibration,
    Zone03_1_DrumDetails,
    Zone03_1_FoamCalibration,
    Zone03_1_FoamDispensingData,
    Zone03_1_InseratDispensingData,
    Zone03_1_InserationCalibration,
    Zone03_1_ProductionData,
    Zone03_1_RealTimeData,
    Zone03_1_ThermalCalibration,
    Zone03_1_ThermalDispensingData,
    Zone03_2_DrumDetails,
    Zone03_2_FoamCalibration,
    Zone03_2_FoamDispensingData,
    Zone03_2_InseratDispensingData,
    Zone03_2_InserationCalibration,
    Zone03_2_ProductionData,
    Zone03_2_RealTimeData,
    Zone03_2_ThermalCalibration,
    Zone03_2_ThermalDispensingData,
    Zone03_Station2DispensingData,
    ZoneNames,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

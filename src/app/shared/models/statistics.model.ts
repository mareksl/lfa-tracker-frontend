export interface IStatisticsItem {
  statsByRank?: IStatisticsByRank;
  totalCount: number;
  doneCount: number;
  percentageDone: number;
  extendedLGCVerified: number;
  performanceVerified: number;
  profileDataVerified: number;
  timeseriesDataVerified: number;
}
interface IStatisticsByRank {
  [name: string]: IStatisticsItem;
}
interface IStatisticsByProperty {
  [name: string]: {
    statsByRank: IStatisticsByRank;
    totalCount: number;
    doneCount: number;
    percentageDone: number;
    extendedLGCVerified: number;
    performanceVerified: number;
    profileDataVerified: number;
    timeseriesDataVerified: number;
  };
}

export interface IStatistics extends IStatisticsItem {
  statsByRank: IStatisticsByRank;
  statsByDepartment: IStatisticsByProperty;
  statsByAssignee: IStatisticsByProperty;
  statsByUniverse: IStatisticsByProperty;
  date: Date;
  _id: string;
}

// export class Statistics implements IStatistics {
//   totalFundCount: number;
//   percentageDone: number;
//   constructor(data) {
//     this.totalFundCount = data.totalFundCount;
//     this.percentageDone = data.percentageDone;
//   }
// }

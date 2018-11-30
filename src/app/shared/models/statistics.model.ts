export interface IStatisticsItem {
  statsByRank?: IStatisticsByRank;
  totalCount: number;
  doneCount: number;
  percentageDone: number;
  extendedLGCVerified: number;
  performanceVerified: number;
  profileDataVerified: number;
  timeSeriesVerified: number;
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
    timeSeriesVerified: number;
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

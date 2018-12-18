export interface IStatisticsCollection {
  count: number;
  extendedLGCVerified: number;
  performanceVerified: number;
  profileDataVerified: number;
  timeSeriesVerified: number;
  complete: number;
  completeWithPerformance: number;
}

interface IStatisticsByRank {
  [name: string]: IStatisticsCollection;
}

export interface IStatisticsItem {
  total: IStatisticsCollection;
  rank123: IStatisticsCollection;
  byRank: IStatisticsByRank;
}

interface IStatisticsByProperty {
  [name: string]: IStatisticsItem;
}

export interface IStatistics extends IStatisticsItem {
  byRank: IStatisticsByRank;
  byDepartment: IStatisticsByProperty;
  byFundOwner: IStatisticsByProperty;
  byUniverse: IStatisticsByProperty;
  date: Date;
  _id: string;
}

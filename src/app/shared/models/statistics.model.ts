interface IStatisticsByRank {
  [name: string]: {
    totalCount: number;
    doneCount: number;
    percentageDone: number;
  };
}
interface IStatisticsByProperty {
  [name: string]: {
    statsByRank: IStatisticsByRank;
    totalCount: number;
    doneCount: number;
    percentageDone: number;
  };
}

export interface IStatistics {
  totalCount: number;
  doneCount: number;
  percentageDone: number;
  statsByRank: IStatisticsByRank;
  statsByDepartment: IStatisticsByProperty;
  statsByAssignee: IStatisticsByProperty;
}

// export class Statistics implements IStatistics {
//   totalFundCount: number;
//   percentageDone: number;
//   constructor(data) {
//     this.totalFundCount = data.totalFundCount;
//     this.percentageDone = data.percentageDone;
//   }
// }

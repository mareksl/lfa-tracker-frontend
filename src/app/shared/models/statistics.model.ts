interface IStatisticsByCriteria {
  [name: string]: {
    totalCount: number;
    doneCount: number;
    percentageDone: number;
  };
}

export interface IStatistics {
  totalCount: number;
  doneCount: number;
  percentageDone: number;
  statsByRank: IStatisticsByCriteria;
  statsByDepartment: IStatisticsByCriteria;
  statsByAssignee: IStatisticsByCriteria;
}

// export class Statistics implements IStatistics {
//   totalFundCount: number;
//   percentageDone: number;
//   constructor(data) {
//     this.totalFundCount = data.totalFundCount;
//     this.percentageDone = data.percentageDone;
//   }
// }

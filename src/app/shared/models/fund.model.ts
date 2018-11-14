export interface IFund {
  lipperID: number;
  awardUniverse: string[];
  awardPeriod: number[];
  highestRank: number;
  fundName: string;
  domicile: string;
  advisorCompanyCode: number;
  advisorCompanyName: string;
  promoterCompanyCode: number;
  promoterCompanyName: string;
  fundOwner: string;
  department: string;
  classificationScheme: string;
  iSINCode: string;
  assetTypeName: string;
  classificationName: string;
  awardVerifiedNoteDate: string;
  awardVerifiedNoteText: string;
  extendedLGCVerified: boolean;
  performanceVerified: boolean;
  profileDataVerified: boolean;
  timeseriesDataVerified: boolean;
}

export class Fund implements IFund {
  lipperID: number;
  awardUniverse: string[];
  awardPeriod: number[];
  highestRank: number;
  fundName: string;
  domicile: string;
  advisorCompanyCode: number;
  advisorCompanyName: string;
  promoterCompanyCode: number;
  promoterCompanyName: string;
  fundOwner: string;
  department: string;
  classificationScheme: string;
  iSINCode: string;
  assetTypeName: string;
  classificationName: string;
  awardVerifiedNoteDate: string;
  awardVerifiedNoteText: string;
  extendedLGCVerified: boolean;
  performanceVerified: boolean;
  profileDataVerified: boolean;
  timeseriesDataVerified: boolean;

  constructor(data: IFund) {
    this.lipperID = data.lipperID;
    this.awardUniverse = data.awardUniverse;
    this.awardPeriod = data.awardPeriod;
    this.highestRank = data.highestRank;
    this.fundName = data.fundName;
    this.domicile = data.domicile;
    this.advisorCompanyCode = data.advisorCompanyCode;
    this.advisorCompanyName = data.advisorCompanyName;
    this.promoterCompanyCode = data.promoterCompanyCode;
    this.promoterCompanyName = data.promoterCompanyName;
    this.fundOwner = data.fundOwner;
    this.department = data.department;
    this.classificationScheme = data.classificationScheme;
    this.iSINCode = data.iSINCode;
    this.assetTypeName = data.assetTypeName;
    this.classificationName = data.classificationName;
    this.awardVerifiedNoteDate = data.awardVerifiedNoteDate;
    this.awardVerifiedNoteText = data.awardVerifiedNoteText;
    this.extendedLGCVerified = data.extendedLGCVerified;
    this.performanceVerified = data.performanceVerified;
    this.profileDataVerified = data.profileDataVerified;
    this.timeseriesDataVerified = data.timeseriesDataVerified;
  }

  get fundStatus(): string {
    const statuses = [
      this.extendedLGCVerified,
      this.performanceVerified,
      this.profileDataVerified,
      this.timeseriesDataVerified
    ];

    return statuses.every(v => v)
      ? 'done'
      : statuses.some(v => v)
        ? 'pending'
        : 'none';
  }
}

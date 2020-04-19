import { FormControl } from '@angular/forms';

export class Employee {
    employeeNo: string;
    image: string;
    name: string;
    designation: string;
    rating: string;
    exp: string;
    doj: string;
    currentTeam: Teams;
    reportingManager: string;
    phone: string;
    email: string;
    location: string;
    roleType: string;
    department: Departments;
}

export enum Departments {
    FEDEV = "Frontend Development",
    MLENG = "ML Engineering",
    QA = "QualityAnalyst",
    HRM = "Human Resource Management",
    RnD = "Research $ Development"
}

export enum Teams {
    IDC = 'IDC',
    OCBC = 'OCBC',
    RDN = 'Radian',
    RTY = 'Rustify',
    PT = 'Product Teams'
}

export const TeamsArray  = [
    { key: 'IDC', value: 'IDC' },
    { key: 'OCBC', value: 'OCBC' },
    { key: 'RDN', value: 'Radian' },
    { key: 'RTY', value: 'Rustify' }
]

export const DepartmentsArray = [
    { key: 'FEDEV', value: Departments.FEDEV },
    { key: 'MLENG', value: Departments.MLENG },
    { key: 'QA', value: Departments.QA },
    { key: 'HRM', value: Departments.HRM },
    { key: 'RnD', value: Departments.RnD },
]

export const RolesArray  = [
    { key: 'FT', value: 'Full Time' },
    { key: 'PT', value: 'Part Time' },
    { key: 'CTH', value: 'Contract to Hire' }
]
export const DesignationArray  = [
    { key: 'SDEV', value: 'Senior UI Developer' },
    { key: 'JDEV', value: 'Junior UI Developer' },
    { key: 'SDL', value: 'Software Developer Lead' },
    { key: 'QAL', value: 'QA Analyst Lead' },
    { key: 'TCH', value: 'Technical Architect' },
]
export const ExperienceArray  = [
    { key: 'GT5', value: '5 Years above' },
    { key: 'Y05', value: '5 Years' },
    { key: 'Y04', value: '4 Years' },
    { key: 'Y03', value: '3 Years' },
    { key: 'Y02', value: '2 Years' },
    { key: 'Y01', value: '1 Year' },
]
export const YearOfJoinArray  = [
    { key: 'Y15', value: '2015' },
    { key: 'Y16', value: '2016' },
    { key: 'Y17', value: '2017' },
    { key: 'Y18', value: '2018' },
    { key: 'Y19', value: '2019' },
]
export const LocationArray  = [
    { key: 'BLR', value: 'Bangalore' },
    { key: 'HYD', value: 'Hyderabad' },
    { key: 'DLH', value: 'Delhi' },
    { key: 'CHN', value: 'Chennai' },
]
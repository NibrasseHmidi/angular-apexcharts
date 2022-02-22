// export type Maybe<T> = T | null;
// export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
// export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
// export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
// export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
// /** All built-in and custom scalars, mapped to their actual values */


// export type Scalars = {
//   ID: string;
//   String: string;
//   Boolean: boolean;
//   Int: number;
//   Float: number;
//   /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
//   DateTime: any;
//   /** The `Upload` scalar type represents a file upload. */
//   Upload: any;
// };
// export type DashboardOutput = {
//   __typename?: 'DashboardOutput';
//   country: Scalars['String'];
//   confirmed: Scalars['Int'];
//   deaths: Scalars['Int'];
//   recovered: Scalars['Int'];
//   growthRate:Scalars['Int'];
// };
export interface DashboardOutput{
  country ?: string ,
  confirmed ?: number ,
  deaths ?: number,
  recovered ?:number ,
  active ?: number
}


export interface IAppState {
  readonly current: string
  readonly squares: Array<Array<string|null>>
  readonly step: number
  readonly winner: string|null
}
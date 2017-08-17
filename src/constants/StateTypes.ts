export type AppStateSquares = Array<Array<string|null>>

export interface IAppState {
  readonly current: string
  readonly squares: AppStateSquares
  readonly step: number
  readonly winner: string|null
}
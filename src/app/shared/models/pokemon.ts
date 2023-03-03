export interface pokemon{
  id : number,
  name : string,
  height : number,
  weight : number,
  types : types[]
  stats : stats[]
  moves : moves[]
}

export interface types{
  type : type
}

interface type{
  name : string
}

export interface stats{
  base_stat : number
  stat : stat
}

interface stat{
  name : string
}

export interface moves{
  move : move
}

interface move {
  name : string
}

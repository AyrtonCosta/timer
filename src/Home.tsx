// import { createContext, useContext, useState } from 'react'

// const CyclesContext = createContext({} as any)

// export const NewCycleForm = () => {
//   const { activeCycle, setActiveCycle } = useContext(CyclesContext)
//   return (
//     <>
//       <h1>NewCycleForm:{activeCycle}</h1>
//       <button
//         onClick={() => {
//           setActiveCycle(2)
//         }}
//       >
//         alterar ciclo
//       </button>
//     </>
//   )
// }
// export const CountDown = () => {
//   const { activeCycle } = useContext(CyclesContext)
//   return <h1>CountDown:{activeCycle}</h1>
// }

// export const Home = () => {
//   const [activeCycle, setActiveCycle] = useState(0)
//   return (
//     <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
//       <div>
//         <NewCycleForm />
//         <CountDown />
//       </div>
//     </CyclesContext.Provider>
//   )
// }

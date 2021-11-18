const Main = ({rooms}) => {
  return (
    // And produces the following output:
    <div>
      <ol>
        {rooms.map(room => {
          return <li>{Object.values(room).join()}</li>
        })}
      </ol>
      </div>
  )
}
// const input1 = 1. Write a react function that takes the following input:
export default function Task1() {
    const rooms = [
    { room_type: "Queen", vacant_rooms: 5, price: 100 },
    { room_type: "Double", vacant_rooms: 3, price: 75 },
    { room_type: "Twin", vacant_rooms: 8, price: 60 }
  ];
    return (
        <div className="box">
            <h1>Task 1</h1>
            <Main rooms={rooms} />
        </div>
    )
}

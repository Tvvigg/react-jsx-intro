function App() {
  return (
    <div>
      <Person
        name="Name1"
        age={20}
        hobbies={["reading", "walking", "flying"]}
      />

      <Person
        name="Name2"
        age={18}
        hobbies={["reading", "running", "swimming"]}
      />

      <Person
        name="Name3"
        age={17}
        hobbies={["reading", "watching tv", "driving"]}
      />
    </div>
  );
}

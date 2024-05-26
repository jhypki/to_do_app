import ToDoList from "@/components/ToDoList/ToDoList";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center gap-14 max-w-xl pt-12">
      <ToDoList />
    </main>
  );
}

export const TaskItem = ({
  task,
  status,
}: {
  task: string;
  status: string;
}) => {
  console.log(task);
  return (
    <>
      <p>{task}</p>
      <p>{status}</p>
    </>
  );
};

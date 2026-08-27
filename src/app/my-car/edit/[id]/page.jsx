import EditCarForm from "@/components/EditCarForm";

const EditcarPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/car/${id}`, {
    cache: "no-store",
  });
  const car = await res.json();

  return (
    <div className="w-full bg-neutral-950 min-h-screen text-white p-8 flex justify-center items-center">
      <EditCarForm car={car} id={id} />
    </div>
  );
};

export default EditcarPage;

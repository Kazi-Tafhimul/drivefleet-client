"use client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const DeleteButton = ({_id, carName}) => {
    const router = useRouter();
    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5000/car/${_id}`, {
            method:"DELETE",
        })
        if(res){
            toast.success("Vehicle permanently removed.");
            router.refresh();

        }
        else{
            toast.error("Failed to delete.");
        }
    }
    return (
        <AlertDialog>
      <AlertDialog.Trigger>
        <button className="bg-red-950/40 text-red-400 text-xs px-4 py-2 rounded-md hover:bg-red-900/40 transition-colors h-9 font-semibold flex items-center gap-1.5">
          <TrashBin className="size-3.5" /> Delete
        </button>
      </AlertDialog.Trigger>
      
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px] bg-neutral-900 border border-neutral-800 text-white rounded-xl">
            <AlertDialog.CloseTrigger className="text-neutral-400 hover:text-white" />
            
            <AlertDialog.Header className="flex gap-3 items-center">
              <AlertDialog.Icon status="danger" className="bg-red-950/50 text-red-500">
                <TrashBin className="size-5" />
              </AlertDialog.Icon>
              <AlertDialog.Heading className="text-lg font-bold text-white">
                Delete Listing?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body className="text-neutral-400 text-sm py-2">
              <p>
                Are you sure you want to remove <span className="text-white font-bold">{carName}</span>? This action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer className="flex gap-2 justify-end pt-4">
              <Button slot="close" className="bg-neutral-800 text-neutral-300 hover:bg-neutral-700 text-xs font-semibold px-4 py-2 rounded-md">
                Cancel
              </Button>
              <Button slot="close" onClick={handleDelete} className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 py-2 rounded-md">
                Confirm Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    );
};

export default DeleteButton;
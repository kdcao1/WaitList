import { Loader } from "@mantine/core";

export default function Loading() {
    return (
        <div className=" flex justify-center items-center h-dvh s-dvh">
            <Loader color="red" type="bars" />
        </div>
    )
}
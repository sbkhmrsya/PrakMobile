import { statuses } from "@/constants";
import type { Status } from "@/types";

const statusDefault: Status = {
    idStatus: 0,
    namaStatus: "Tidak diketahui",
    warnaBg: "#F1F5F9",
    warnaText: "#475569",
};

export function getStatus(idStatus: number): Status {
    const status = statuses.find(
        (item) => item.idStatus === idStatus
    );

    return status ?? statusDefault;
}

import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"

function SenderAnalytics() {

    const data = [
        {
            "id": 1,
            "header": "Cover page",
            "type": "Cover page",
            "status": "In Process",
            "target": "18",
            "limit": "5",
            "reviewer": "Eddie Lake"
        },
        {
            "id": 2,
            "header": "Table of contents",
            "type": "Table of contents",
            "status": "Done",
            "target": "29",
            "limit": "24",
            "reviewer": "Eddie Lake"
        }];
    return (
        <div>
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <SectionCards />
                <div className="px-4 lg:px-6">
                    <ChartAreaInteractive />
                </div>
                <DataTable data={data} />
            </div>

        </div>
    );
}

export default SenderAnalytics;
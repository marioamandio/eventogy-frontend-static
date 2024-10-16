import { GalleryView, ArrowDown } from "../icons";
import EventCard from "./Card";

type EventsSectionProps = {
  data: {
    pagination: {
      total: number;
    };
    events: Array<{
      id: string;
      name: string;
      data: {
        location_name?: string;
        location_address?: string;
        scheduled_dates?: string[];
      } | null;
    }>;
  };
};

const EventsSection: React.FC<EventsSectionProps> = ({ data }) => {
  return (
    <>
      <div className="xs:mx-1 sm:mx-8 py-6 flex justify-between items-center flex-col xs:flex-row gap-1">
        <h2 className="text-lg font-semibold text-gray-900">
          Events{" "}
          <span className="text-gray-500">({data.pagination.total})</span>
        </h2>
        <div className="flex items-center space-x-2">
          <button className="flex items-center px-4 py-2 bg-white text-gray-600 rounded border border-gray-300 hover:bg-gray-100">
            <GalleryView className="h-5 w-5" />
            <ArrowDown />
          </button>
          <button className="flex items-center px-4 py-2 bg-white text-gray-600 rounded border border-gray-300 hover:bg-gray-100">
            Last modified
            <ArrowDown />
          </button>
        </div>
      </div>
      <div className="mx-1 xs:mx-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.events.map(({ id, name, data }) => {
            return <EventCard key={id} eventID={id} title={name} data={data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default EventsSection;

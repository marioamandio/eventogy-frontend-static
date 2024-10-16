import { formatDateRange } from "../../lib/utils";

interface EventCardProps {
  title: string;
  data: {
    location_name?: string;
    location_address?: string;
    scheduled_dates?: string[];
  } | null;
  eventID: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, data, eventID }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={`https://picsum.photos/seed/${eventID}/400/300`}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mt-2 text-gray-800">{title}</h3>
        {data && (
          <>
            <p className="text-gray-500">
              <span className="font-semibold">{data.location_name}</span> -{" "}
              {data.location_address}
            </p>
            {data.scheduled_dates && (
              <p className="text-gray-500 mt-1">
                {formatDateRange(data.scheduled_dates)}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default EventCard;


export const STATUS = {
    ACTIVE: "Active",
    INACTIVE: "Inactive",
  };
  
  export const SAMPLE_DEALERS = [
    {
      id: "d1",
      name: "AutoHub Motors",
      location: "Mumbai",
      contact: "9876543210",
      status: "Active",
      address: "123 Marine Drive, Mumbai",
      email: "contact@autohub.in",
      operatingHours: "09:00 - 18:00",
    },
    {
      id: "d2",
      name: "DriveZone",
      location: "Bengaluru",
      contact: "9845123012",
      status: "Active",
      address: "45 MG Road, Bengaluru",
      email: "info@drivezone.com",
      operatingHours: "10:00 - 19:00",
    },
    {
      id: "d3",
      name: "CarVerse",
      location: "Delhi",
      contact: "9112233445",
      status: "Inactive",
      address: "12 Connaught Place, New Delhi",
      email: "hello@carverse.in",
      operatingHours: "09:30 - 17:30",
    },
    ...Array.from({ length: 25 }).map((_, i) => ({
      id: `s${i}`,
      name: `Sample Dealer ${i + 1}`,
      location: i % 2 === 0 ? "Pune" : "Chennai",
      contact: `9000000${100 + i}`,
      status: i % 3 === 0 ? "Inactive" : "Active",
      address: `Address ${i + 1}`,
      email: `dealer${i + 1}@example.com`,
      operatingHours: "09:00 - 18:00",
    })),
  ];
  
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  buildingId: string;
  avatar: any;
}

export interface Contractor {
  id: string;
  name: string;
  skills: string[];
  isAvailable: boolean;
  avatar: any;
  phone: string;
  email: string;
  rating: number;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: any;
}

export interface WorkOrder {
  id: string;
  title: string;
  type: string;
  status: "Pending" | "In Progress" | "Completed" | "Rejected";
  assignedTo: string; // contractor id
  requestedBy: string; // user id
  date: string;
  time: string;
}

export interface Building {
  id: string;
  name: string;
  location: string;
  openWorkOrders: number;
  completedWorkOrders: number;
}

export interface Ticket {
  id: string;
  title: string;
  createdBy: string; // user id
  createdAt: string;
  status: "New" | "Open" | "Resolved";
}

export interface CalendarEvent {
  id: string;
  serviceType: string;
  contractorId: string;
  date: string;
  time: string;
  status: "Upcoming" | "Completed";
}

export interface Participant {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  hackathonsNumber: number;
  experience: string;
  university: string;
  major: string;
  degree: string;
  gradYear: Date;
  hearedDatathon: string;
  motivation: string;
  hasTeam: boolean;
  teamCode: string | null;
}

export interface CreateParticipant {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  hackathonsNumber: number;
  experience: string;
  university: string;
  major: string;
  degree: string;
  gradYear: Date;
  hearedDatathon: string;
  motivation: string;
  hasTeam: boolean;
  teamCode?: string;
}

import prisma from '../../infra/prisma';
import { CreateParticipant } from '../../interfaces/participant';
import { CreateTeam } from '../../interfaces/team';

export const createParticipant = async (inputData: CreateParticipant) =>
  prisma.participant.create({
    data: inputData,
  });

export const createTeam = async (inputData: CreateTeam) =>
  prisma.team.create({
    data: inputData,
  });

export const getTeamByCode = async (teamCode: string) =>
  prisma.team.findUnique({
    where: {
      teamCode,
    },
  });

export const generateCode = () => {
  return 'code3';
};

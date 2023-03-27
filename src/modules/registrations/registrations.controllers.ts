import { Request, Response } from 'express';
import { resErr, resSuccess } from '../../utils/utils';
import { Participant } from '../../interfaces/participant';
import {
  createParticipant,
  createTeam,
  generateCode,
  getTeamByCode,
} from './registrations.services';
import { Team } from '../../interfaces/team';

export async function registerController(req: Request, res: Response) {
  try {
    if (!req.body.hasTeam) {
      delete req.body.teamName;
      delete req.body.newTeam;
      delete req.body.teamCode;
      const participant: Participant = await createParticipant(req.body);
      return resSuccess(res, participant, 201);
    }
    if (!req.body.newTeam) {
      //Get team
      const team = getTeamByCode(req.body.teamCode);
      //if teamCode is wrong: return Error
      if (!team) {
        return resErr(res, 'resources not found', 404);
      }
      //if team exists: create participant
      delete req.body.teamName;
      delete req.body.newTeam;
      const participant: Participant = await createParticipant(req.body);
      return resSuccess(res, participant, 201);
    }

    //Generate Code
    const code: string = generateCode();
    //Create Team
    const team: Team = await createTeam({
      teamName: req.body.teamName,
      teamCode: code,
    });
    if (!team) {
      throw new Error('Error while Creating team');
    }
    //Create Participant, with the TeamCode
    const body = req.body;
    delete body.teamName;
    delete body.newTeam;

    const participant: Participant = await createParticipant(body);
    return resSuccess(res, { participant, team }, 201);
  } catch (error) {
    console.log(error);
    resErr(res, 'internal error', 500);
  }
}

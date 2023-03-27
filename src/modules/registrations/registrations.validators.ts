import { validateRequest } from 'zod-express-middleware';
import { z } from 'zod';

export const registerValidator = validateRequest({
  params: z.object({}),
  body: z.object({
    firstName: z.string({
      required_error: 'missing data',
      invalid_type_error: 'missing data',
    }),
    lastName: z.string({
      required_error: 'missing data',
      invalid_type_error: 'missing data',
    }),
    email: z
      .string({
        required_error: 'missing data',
        invalid_type_error: 'missing data',
      })
      .email(),
    phoneNumber: z.string({
      required_error: 'missing data',
      invalid_type_error: 'missing data',
    }),
    hackathonsNumber: z.number({
      required_error: 'missing data',
      invalid_type_error: 'missing data',
    }),
    experience: z.string({
      required_error: 'missing data',
      invalid_type_error: 'missing data',
    }),
    university: z.string({
      required_error: 'missing data',
      invalid_type_error: 'missing data',
    }),
    major: z.string({
      required_error: 'missing data',
      invalid_type_error: 'missing data',
    }),
    degree: z.string({
      required_error: 'missing data',
      invalid_type_error: 'missing data',
    }),
    gradYear: z.string({
      required_error: 'missing data',
      invalid_type_error: 'missing data',
    }),
    hearedDatathon: z.string({
      required_error: 'missing data',
      invalid_type_error: 'missing data',
    }),
    motivation: z.string({
      required_error: 'missing data',
      invalid_type_error: 'missing data',
    }),
    hasTeam: z.boolean({
      required_error: 'missing data',
      invalid_type_error: 'missing data',
    }),
    newTeam: z.boolean({
      required_error: 'missing data',
      invalid_type_error: 'missing data',
    }),
    teamName: z.optional(
      z.string({
        invalid_type_error: 'missing data',
      })
    ),
    cv: z.optional(
      z.string({
        invalid_type_error: 'missing data',
      })
    ),
    github: z.optional(
      z.string({
        invalid_type_error: 'missing data',
      })
    ),
    linkedIn: z.optional(
      z.string({
        invalid_type_error: 'missing data',
      })
    ),
  }),
  query: z.object({}),
});

import { Request, Response } from 'express';
import createUser from './services/createUser';

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    email: 'sammuel@email.com.br',
    password: '123456',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      { title: 'JavaScript', experience: 100 }
    ]
  });
  
  return res.json({ message: 'Hello World' });
}

import { Controller, Post, Req } from '@nestjs/common';
import { exec } from 'child_process';
import { Request } from 'express';
import * as FS from 'fs';

@Controller('hacker')
export class HackerController {
  private language = {
    javascript: {
      template: (code) => `${code};console.log(JSON.stringify(main()))`,
      cmd: (path) => `node ${path}`,
      path: () => `sources/js/${Date.now()}.js`,
    },
    php: {
      template: (code) => `<?php ${code};echo json_encode(main());`,
      cmd: (path) => `php ${path}`,
      path: () => `sources/php/${Date.now()}.php`,
    },
  };
  @Post('/')
  async post(@Req() request: Request) {
    const { body } = request;
    const languageEngine = this.language[body.language];
    const path = languageEngine.path();
    FS.writeFileSync(path, languageEngine.template(body.code));
    let stdout: any = await this.excute(languageEngine.cmd(path));
    console.log(stdout);
    stdout = JSON.parse(stdout);
    return stdout;
  }
  excute(cmd) {
    return new Promise((resolve, reject) => {
      exec(cmd, (error, stdout, stderr) => {
        if (stderr) {
          reject(stderr);
        }
        resolve(stdout);
      });
    });
  }
}

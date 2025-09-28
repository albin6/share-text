import { NextFunction, Request, Response } from "express";
import { ISnippetService } from "../interfaces/service-interfaces/snippet.service.interface";
import { StatusCode } from "../constants/status-code";
import { inject, injectable } from "tsyringe";

@injectable()
export class SnippetController {
  constructor(
    @inject("ISnippetService") private _snippetService: ISnippetService
  ) {}

  async createSnippet(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const snippetData = req.body;
      const newSnippet = await this._snippetService.createSnippet(snippetData);
      res.status(StatusCode.CREATED).json(newSnippet);
    } catch (error) {
      next(error);
    }
  }
}

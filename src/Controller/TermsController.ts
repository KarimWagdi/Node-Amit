import { Response } from "express";
import { AppDataSource } from "../dbConfig/data-source";


class TermsController {
  static createTerm = async(request:any ,response:Response):Promise<any> =>{
    try {
      const termsRepository = AppDataSource.getRepository("terms");
      const savedTerms = await termsRepository.save(request.body);
      response.status(201).json(savedTerms);
    } catch (error) {
      response.status(500).json({ message: error });
    }
  }

  static getTerm   = async(request:any, response:Response):Promise<any> => {
    try{
       const termsRepository = AppDataSource.getRepository("terms");
       const term = await termsRepository.find();
       response.json(term);
    } catch (error) {
      response.status(500).json({ message: error });
    }
  }

  static getTermById = async(request:any, response:Response):Promise<any> => {
    try {
       const termsRepository = AppDataSource.getRepository("terms");
       const term = await termsRepository.findOne({where:{id:request.params.id}});
       response.json(term);

    }catch (error) {
      response.status(500).json({ message: error });
    }
  }

  static updateTerm = async(request:any, response:Response):Promise<any> => {
    try{
       const termsRepository = AppDataSource.getRepository("terms");
       const updatedTerm = await termsRepository.update(request.params.id, request.body);
       response.json(updatedTerm);
    } catch (error) {
      response.status(500).json({ message: error });
    }
  }

  static deleteTerm = async(request:any, response:Response):Promise<any> => {
    try{
      // console.log(request.params.id);
      
       const termsRepository = AppDataSource.getRepository("terms");
       const data = await termsRepository.softDelete({id: request.params.id});
       console.log(data);
       
       response.send("Term deleted Successfully");
    } catch (error: any) {
      response.status(500).json({ message: error.message });
    }
  }
  }

  export default TermsController;
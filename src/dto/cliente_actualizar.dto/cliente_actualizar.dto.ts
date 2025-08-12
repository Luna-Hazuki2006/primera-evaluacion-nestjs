import { PartialType } from "@nestjs/mapped-types";
import { ClienteDto } from "../cliente.dto/cliente.dto";

export class ClienteActualizarDto extends PartialType(ClienteDto) {}

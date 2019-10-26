import { HttpService } from 'src/app/service/http-service.service';

export class Usuario {
    // tslint:disable-next-line: variable-name
    private static _endPoint = '/usuario';
    public static get endPoint() {
        return Usuario._endPoint;
    }
    public static set endPoint(value) {
        Usuario._endPoint = value;
    }
    public nombre: string;
    public correo: string;
    public contrasena: string;
    public confirmacionContrasena: string;
}

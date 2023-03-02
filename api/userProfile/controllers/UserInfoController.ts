import { JsonController, Get, QueryParam } from "routing-controllers";
import { Service } from 'typedi';
import { UserInfoService } from "../service/UserInfoService";

@JsonController('/userInfo')
@Service()
export class UserInfoController {
  constructor(public _userInfoService: UserInfoService) { }

  @Get('/getUserInfo')
  public async getUserInfo(): Promise<any> {
    try {
      const resp = await this._userInfoService.userInfoExecuter();
      console.info('Controller: getUserInfo', 'response:' + JSON.stringify(resp));
      return Promise.resolve(resp);
    } catch (error) {
      console.error('Controller: getUserInfo', 'errorInfo:' + JSON.stringify(error));
      return Promise.reject(error);
    }
  }

  @Get('/getUserInfoById')
  public async getUserInfoById(@QueryParam('id') userId: number): Promise<any> {
    try {
      const resp = await this._userInfoService.userInfoExecuterById(userId);
      console.info('Controller: getUserInfoById', 'response:' + JSON.stringify(resp));
      return Promise.resolve(resp);
    } catch (error) {
      console.error('Controller: getUserInfoById', 'errorInfo:' + JSON.stringify(error));
      return Promise.reject(error);
    }
  }
}
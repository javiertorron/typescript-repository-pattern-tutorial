import axios from 'axios';
import { Service } from 'typedi';
import { UserPosts, UserObject, UserPost } from 'api/userProfile/model/IUserInfo';

@Service()
export class UserInfoService {
  constructor() {}

  async userInfoExecuter(): Promise<Array<UserObject>> {
    try {
      const userPostResponseList: UserPosts = await axios.get('https://gorest.co.in/public/v2/posts');
      return Promise.resolve(userPostResponseList.data);
    } catch (error) {
      console.error('Service: userInfoExecuter', 'errorInfo:' + JSON.stringify(error));
      return Promise.reject(error);
    }
  }

  async userInfoExecuterById(userId?: any): Promise<UserObject> {
    try {
      const userPostResponse: UserPost = await axios.get(`https://gorest.co.in/public/v2/posts/${userId}`);
      return Promise.resolve(userPostResponse.data);
    } catch (error) {
      console.error('Service: userInfoExecuterById', 'errorInfo:' + JSON.stringify(error));
      return Promise.reject(error);
    }
  }
}
import {FileConfigService} from '../domain/services/FileConfigService';

export type IFileModuleConfig = Partial<Omit<Readonly<FileConfigService>, 'onModuleInit'>>

export default () => ({

} as IFileModuleConfig);

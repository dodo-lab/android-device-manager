import {BootType} from './types';

/**
 * メインプロセスからレンダープロセスへの通信.
 * @note 戻り値はvoid型にすること.
 */
export type IpcMainToRender = {
  updateEmulators: (emulators: string[]) => void;
};
export type IpcMainToRenderKey = keyof IpcMainToRender;

/**
 * レンダープロセスからメインプロセスへの通信.
 * @note 戻り値はvoid型にすること.
 */
export type IpcRenderToMain = {
  bootEmulator: (emulator: string, bootType: BootType) => void;
};
export type IpcRenderToMainKey = keyof IpcRenderToMain;

/**
 * レンダープロセスからメインプロセスへの双方向通信.
 * @note 戻り値はPromise型にすること.
 */
export type IpcRenderToMainInvoke = {
  sample: (flag: boolean, count: number) => Promise<string>;
};
export type IpcRenderToMainInvokeKey = keyof IpcRenderToMainInvoke;

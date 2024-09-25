import { h, VNode } from 'snabbdom';
import { MaybeVNodes } from '../interfaces';

export default function (body: MaybeVNodes): VNode {
  return h('body', [h('div.container', body)]);
}

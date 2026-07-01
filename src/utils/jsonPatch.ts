import * as jdp from 'jsondiffpatch';

export const generatePatch = (left: any, right: any): any => {
  return jdp.diff(left, right);
};

export const applyPatch = (obj: any, patch: any): any => {
  return jdp.patch(JSON.parse(JSON.stringify(obj)), patch);
};

export const reversePatch = (patch: any): any => {
  return jdp.reverse(patch);
};

export const convertToRFC6902 = (patch: any): any[] => {
  const ops: any[] = [];
  const walk = (obj: any, patches: any, path: string = '') => {
    if (!patches) return;

    for (const key in patches) {
      const patch = patches[key];
      const currentPath = path ? `${path}/${key}` : `/${key}`;

      if (Array.isArray(patch)) {
        if (patch.length === 1) {
          ops.push({ op: 'remove', path: currentPath });
        } else if (patch.length === 2) {
          ops.push({ op: 'replace', path: currentPath, value: patch[1] });
        }
      } else if (patch && typeof patch === 'object') {
        walk(obj[key], patch, currentPath);
      }
    }
  };

  walk(null, patch);
  return ops;
};

import loadHeros from '../display_heros.mjs';
import getProjectColors from '../get_project_colors.mjs';

const colors = await getProjectColors("Legacy Minecraft Mapper");
loadHeros("lmm_heros.json", "lmm", colors);
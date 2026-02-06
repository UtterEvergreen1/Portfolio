import loadHeros from '../display_heros.mjs';
import getProjectColors from '../get_project_colors.mjs';

const colors = await getProjectColors("Tascade");
loadHeros("tascade_heros.json", "tascade", colors);

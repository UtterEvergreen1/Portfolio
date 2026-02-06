import loadHeros from '../display_heros.mjs';
import getProjectColors from '../get_project_colors.mjs';

const colors = await getProjectColors("Seedra Engine");
loadHeros("engine_heros.json", "engine", colors);

/*
	@Title: Indian Flag
	@Author: AshishKindom
*/
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 p = fragCoord/iResolution.y;
    vec3 clr = vec3(0.0);
    clr+=(1.0-step(0.33, p.y))*vec3(0.043,0.658,0.0);
    clr+=step(0.66,p.y)*vec3(1.0,0.583,0.0);
    clr+=(step(0.33, p.y)-step(0.66, p.y))*vec3(1.0);
    fragColor = vec4(clr, 1.0);
}
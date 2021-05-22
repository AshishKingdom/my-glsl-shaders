/*
    @Title: RGB Balls
    @Author: AshishKingdom
*/
#define PI 3.1415926535
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 R = fragCoord/iResolution.y;
    vec3 clr = vec3(0.0);
    float i=0.0;
    for(int j=0;j<3;j++)
    {
        vec2 pos = vec2(0.8+0.20*cos(i+iTime*5.0),0.5+0.20*sin(i+iTime*5.0));
        clr[j] = 1.0-smoothstep(0.0,abs(sin(iTime*2.0)),length(pos-R));
        i+=PI/3.0;
    }
    fragColor = vec4(clr,1.0);
}

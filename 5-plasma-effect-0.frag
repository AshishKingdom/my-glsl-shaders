/*
    @Title: Plasma Effect
    @Author: AshishKingdom
*/
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord/iResolution.xy;
    vec3 col;
    float t;
    t = abs(sin(pow(length(uv-vec2(0.5+0.3*sin(iTime*2.0),0.5+0.3*cos(iTime*2.0)))*200.0,0.5)-iTime*5.0));
    //mix color b/w cyan and red depending on the value of t
    col = mix(vec3(0.0,1.0,1.0), vec3(1.0,0.0,0.0),t);
    t = pow(cos(uv.x*20.0+iTime*5.0),2.0);
    //add a mixed color b/w red and green depending on the value of t
    col+=mix(vec3(1.0,0.0,0.0),vec3(0.0,1.0,0.0),t);
    fragColor = vec4(col,1.0);
}
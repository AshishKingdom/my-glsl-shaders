/*
    @Title : Venn Diagram
    @Author : AshishKingdom aka Ashish Kushwaha
*/
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 r = fragCoord.xy / iResolution.y; //diving both comp. by y to maintain aspect ratio
    vec2 pos[3] = vec2[](vec2(0.6,0.6), vec2(0.9,0.4), vec2(1.1,0.6));
    
    vec3 bg = vec3(0.1,0.1,0.1);
    vec3 clr[3] = vec3[](vec3(1.0,0.0,0.0), vec3(0.0,1.0,0.0), vec3(0.0,0.0,1.0));
    float rgb[3] = float[](0.0,0.0,0.0);
    
    bool found = false;
    
    for(int i=0;i<3;i++){
        if(length(r-pos[i])<0.35){
            found = true;
            rgb[i] = 1.0;
        }
    }
    if(found) {
        fragColor = vec4(rgb[0],rgb[1], rgb[2], 1.0);
    }
    else {
        fragColor = vec4(bg, 1.0);
    }
}
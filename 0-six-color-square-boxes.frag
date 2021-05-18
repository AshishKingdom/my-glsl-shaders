/*
    @Author: AshishKingdom aka Ashish Kushwaha
*/
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec3 clr[6] = vec3[](vec3(1,0,0), vec3(0,1,0), vec3(0,0,1),
                vec3(1,1,0), vec3(1,0,1), vec3(0,1,1));
    vec2 p = vec2(fragCoord.xy / iResolution.xy);
    bool pos_cond[6] = bool[](p.x>0.0&&p.x<0.33&&p.y>0.0&&p.y<0.5,
                            p.x>=0.33&&p.x<=0.66&&p.y>=0.0&&p.y<=0.5,
                            p.x>=0.66&&p.x<=1.0&&p.y>=0.0&&p.y<=0.5,
                            p.x>=0.0&&p.x<=0.33&&p.y>=0.5&&p.y<=1.0,
                            p.x>=0.33&&p.x<=0.66&&p.y>=0.5&&p.y<=1.0,
                            p.x>=0.66&&p.x<=1.0&&p.y>=0.5&&p.y<=1.0);
    for(int i=0;i<6;i++){
        if(pos_cond[i]){
            fragColor = vec4(clr[i], 1);
            break;
        }
    }
    
}